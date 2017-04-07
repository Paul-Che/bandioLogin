import React, { PureComponent, PropTypes } from 'react';
import { PanResponder, View } from 'react-native';
import { Svg, Circle, G, Path } from 'react-native-svg';
import range from 'lodash.range';
import { interpolateHcl } from 'd3-interpolate';


function calculateArcCircle(index0, segments, radius, startAngle0 = 0, angleLength0 = 2 * Math.PI) {
  // Add 0.0001 to the possible angle so when start = stop angle, whole circle is drawn
  const startAngle = startAngle0 % (2 * Math.PI);
  const angleLength = angleLength0 % (2 * Math.PI);
  const index = index0 + 1;
  const fromAngle = angleLength / segments * (index - 1) + startAngle;
  const toAngle = angleLength / segments * index + startAngle;
  const fromX = radius * Math.sin(fromAngle);
  const fromY = -radius * Math.cos(fromAngle);
  const realToX = radius * Math.sin(toAngle);
  const realToY = -radius * Math.cos(toAngle);

  // add 0.005 to start drawing a little bit earlier so segments stick together
  const toX = radius * Math.sin(toAngle + 0.005);
  const toY = -radius * Math.cos(toAngle + 0.005);

  return {
    fromX,
    fromY,
    toX,
    toY,
    realToX,
    realToY,
  };
}

function getGradientId(index) {
  return `gradient${index}`;
}

class CircularSlider extends PureComponent {

  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
    startAngle: PropTypes.number.isRequired,
    angleLength: PropTypes.number.isRequired,
    segments: PropTypes.number,
    strokeWidth: PropTypes.number,
    radius: PropTypes.number,
    buttonColor: PropTypes.string,
    buttonBorderColor: PropTypes.string
  }

  static defaultProps = {
    segments: 5,
    strokeWidth: 40,
    radius: 145,
    buttonColor: 'yellow',
    buttonBorderColor: 'green',
  }

  state = {
    circleCenterX: false,
    circleCenterY: false,
  }

  componentWillMount() {
    this._sleepPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => this.setCircleCenter(),
      onPanResponderMove: (evt, { moveX, moveY }) => {
        const { circleCenterX, circleCenterY } = this.state;
        const { angleLength, startAngle, onUpdate } = this.props;

        const currentAngleStop = (startAngle + angleLength) % (2 * Math.PI);
        let newAngle = Math.atan2(moveY - circleCenterY, moveX - circleCenterX) + Math.PI/2;

        if (newAngle < 0) {
          newAngle += 2 * Math.PI;
        }

        let newAngleLength = currentAngleStop - newAngle;

        if (newAngleLength < 0) {
          newAngleLength += 2 * Math.PI;
        }

        onUpdate({ startAngle: newAngle, angleLength: newAngleLength % (2 * Math.PI) });
      },
    });

    this._wakePanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => this.setCircleCenter(),
      onPanResponderMove: (evt, { moveX, moveY }) => {
        const { circleCenterX, circleCenterY } = this.state;
        const { angleLength, startAngle, onUpdate } = this.props;

        let newAngle = Math.atan2(moveY - circleCenterY, moveX - circleCenterX) + Math.PI/2;
        let newAngleLength = (newAngle - startAngle) % (2 * Math.PI);

        if (newAngleLength < 0) {
          newAngleLength += 2 * Math.PI;
        }

        onUpdate({ startAngle, angleLength: newAngleLength });
      },
    });
  }

  onLayout = () => {
    this.setCircleCenter();
  }

  setCircleCenter = () => {
    this._circle.measure((x, y, w, h, px, py) => {
      const halfOfContainer = this.getContainerWidth() / 2;
      this.setState({ circleCenterX: px + halfOfContainer, circleCenterY: py + halfOfContainer });
    });
  }

  getContainerWidth() {
    const { strokeWidth, radius } = this.props;
    return strokeWidth + radius * 2 + 2;
  }

  render() {
    const { startAngle, angleLength, segments, strokeWidth, radius, buttonColor, buttonBorderColor} = this.props;
    const containerWidth = this.getContainerWidth();

    const start = calculateArcCircle(0, segments, radius, startAngle, angleLength);
    const stop = calculateArcCircle(segments - 1, segments, radius, startAngle, angleLength);

    return (
      <View style={{ width: containerWidth, height: containerWidth }} onLayout={this.onLayout}>
        <Svg
          height={containerWidth}
          width={containerWidth}
          ref={circle => this._circle = circle}
        >


          {/*
            ##### Circle where the button will move
          */}

          <G transform={{ translate: `${strokeWidth/2 + radius + 1}, ${strokeWidth/2 + radius + 1}` }}>
            <Circle
              r={radius}
              strokeWidth={strokeWidth}
              fill="transparent"
            />

            {
              range(segments).map(i => {
                const { fromX, fromY, toX, toY } = calculateArcCircle(i, segments, radius, startAngle, angleLength);

                const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(2)} A ${radius} ${radius} 0 0 1 ${toX.toFixed(2)} ${toY.toFixed(2)}`;

                return (
                  <Path
                    d={d}
                    key={i}
                    strokeWidth={strokeWidth}
                    stroke={`url(#${getGradientId(i)})`}
                    fill="transparent"
                  />
                )
              })
            }


            {/*
              ##### Circle Icon
            */}

            <G
              transform={{ translate: `${start.fromX}, ${start.fromY}` }}
              onPressIn={() => this.setState({ startAngle: startAngle - Math.PI / 2})}
              {...this._sleepPanResponder.panHandlers}
            >
              <Circle
                r={(strokeWidth - 1) / 2}
                fill={buttonColor}
                stroke={buttonBorderColor}
                strokeWidth="1"
              />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}

export { CircularSlider };

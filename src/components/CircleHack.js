import React, { View, Dimensions, Image, StyleSheet } from 'react-native';

// We need a separate image for each color of the circle
var IMAGES = {
 '#FFFFFF': require('../../images/semicircle-white.png'),
 '#008A83': require('../../images/semicircle-darkblue.png'),
 '#D20022': require('../../images/semicircle-darkred.png'),
};

var Circle = React.createClass({
  propTypes: {
    backColor: React.PropTypes.string,
    children: React.PropTypes.element,
    doneColor: React.PropTypes.string,
    frontColor: React.PropTypes.string.isRequired,
    percent: React.PropTypes.number.isRequired,
  },

 endAngle: function() {
   return 360 * (this.props.percent);
 },

 // If angle < 180
 renderFirstHalf: function() {
   return (
     <View style={styles.container}>
       {/* Draw background circle */}
       <Image
         source={IMAGES[this.props.doneColor]}
         style={[styles.halfCircle, styles.rotate]}
      />
      <Image
        source={IMAGES[this.props.doneColor]}
        style={styles.halfCircle}
      />

      {/* Draw front circle - right half rotated by appropriate angle */}
      <Image
        source={IMAGES[this.props.frontColor]}
        style={[styles.halfCircle, styles.rotate]}
      />
      <Image
        source={IMAGES[this.props.frontColor]}
        style={[styles.halfCircle,
                {transform: [{rotate: (this.endAngle() + 'deg')}]}
        ]}
      />
    </View>);
  },

  // If angle > 180
  renderSecondHalf: function() {
    return (
      <View style={styles.container}>
        {/* Draw left part of background circle */}
        <Image
          source={IMAGES[this.props.doneColor]}
          style={[styles.halfCircle, styles.rotate]}
        />
        {/* Draw left part of front circle, rotated by appropriate angle */}
        <Image
          source={IMAGES[this.props.frontColor]}
          style={[styles.halfCircle, styles.rotate]}
        />
        {/* Draw a page-colored rectangle on the right side to cover part of the semicircle */}
        <View style={[styles.rightBox,
                  {backgroundColor: this.props.backColor}]}/>
        {/* Draw right part of background circle on top of the square */}
        <Image
          source={IMAGES[this.props.doneColor]}
          style={styles.halfCircle}
        />
      </View>
    );
  },

  render: function() {
    return this.endAngle() < 180 ? this.renderFirstHalf() : this.renderSecondHalf();
  },
});

var SIZE = Dimensions.get('window').width * 0.8;
var MARGIN = (Dimensions.get('window').width — SIZE) / 2;

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: MARGIN,
    top: MARGIN,
  },

  halfCircle: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
  },

  rotate: {
    transform: [{rotate: '180deg'}]
  },

  // Cover part of the arc with a background-colored rectangle.
  // Strange +/- values needed to make sure that the semicircle
  // is entirely covered (might be 1px off due to antialiasing)
  rightBox: {
    position: 'absolute',
    width: SIZE / 2 + 2,
    height: SIZE + 2,
    top: -1,
    left: SIZE / 2–1,
  },
});

module.exports = Circle;

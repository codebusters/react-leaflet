var React = require("react");
var Leaflet = require("leaflet");

var latlngType = require("./types/latlng");
var popupContainerMixin = require("./mixins/popupContainer");

module.exports = React.createClass({
  displayName: "Marker",

  mixins: [popupContainerMixin],

  propTypes: {
    position: latlngType.isRequired
  },

  componentWillMount:function() {
    var $__0=    this.props,map=$__0.map,position=$__0.position,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{map:1,position:1});
    this._leafletElement = Leaflet.marker(position, props);
  },

  componentDidUpdate:function(prevProps) {
    if (this.props.position !== prevProps.position) {
      this.getLeafletElement().setLatLng(this.props.position);
    }
  }
});

import CMS from 'netlify-cms';

const idControl = window.createClass({
  generateId: function () {
    const id = Date.now().toString(16);
    return id;
  },

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    if (!this.props.value) {
      this.props.onChange(this.generateId());
    }
  },

  handleChange() {
    this.props.onChange(this.generateId());
  },

  render: function () {
    return window.h('p', null, `${this.props.value}`);
  },
});

const idPreview = window.createClass({
  getInitialState: function () {
    console.log(this.props);
    return {};
  },
  render: function () {
    return window.h('p', null, `ID: ${this.props.value}`);
  },
});

CMS.registerWidget('id', idControl, idPreview);

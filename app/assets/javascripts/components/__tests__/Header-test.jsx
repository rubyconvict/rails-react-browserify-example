/** @jsx React.DOM */

jest.dontMock('../Header');

describe('Header', function() {
  it('renders text', function() {
    const React = require('react/addons');
    const Header = require('../Header');
    const TestUtils = React.addons.TestUtils;

    const messageBox = TestUtils.renderIntoDocument(
      <Header name="Kake" />
    );

    expect(messageBox.getDOMNode().textContent).toBe('Hello, Kake!');
  });
});

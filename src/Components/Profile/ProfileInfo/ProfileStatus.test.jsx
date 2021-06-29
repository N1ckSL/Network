import React from "react";
import s from "./ProfileInfo.module.css";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus compnent", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="ququ epta" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("ququ epta");
  });

  test("after creation SPAN should be displayed", () => {
    const component = create(<ProfileStatus status="ququ epta" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation INPUT should not be displayed", () => {
    const component = create(<ProfileStatus status="ququ epta" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation SPAN should be displayed and status should be from props", () => {
    const component = create(<ProfileStatus status="ququ epta" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("ququ epta");
  });

  test("INPUT should be displayed in editMode instead of SPAN", () => {
    const component = create(<ProfileStatus status="ququ epta" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input")
    expect(input.props.value).toBe("ququ epta");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="ququ epta" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
    
  });

});

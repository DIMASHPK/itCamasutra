import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "../components/Profile/ProfileInfo/ProfileStatus.jsx";

describe("Profile status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"Hello"}/>);
        const instance = component.getInstance();

        expect(instance.state.status).toBe("Hello");
    });

    test("render span in Profile status component", () => {
        const component = create(<ProfileStatus status={"Hello"}/>);
        const root = component.root;
        const span = root.findByType("span");

        expect(span).not.toBeNull();
    });

    test("render input in Profile status component", () => {
        const component = create(<ProfileStatus status={"Hello"}/>);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("input shold be displayed in edit mode", () => {
        const component = create(<ProfileStatus status={"Hello"}/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick()
        const input = root.findByType("input");

        expect(input.props.value).toBe("Hello");
    });

    test("render span in Profile status component", () => {
        const component = create(<ProfileStatus status={"Hello"}/>);
        const root = component.root;
        const span = root.findByType("span");

        expect(span.children[0]).toBe("Hello");
    });

    test("callback should be called Profile status component", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"Hello"} updateStatusThunkCreater={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1);
    });


});

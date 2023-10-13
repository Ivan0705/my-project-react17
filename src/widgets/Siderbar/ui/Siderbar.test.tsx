import {Siderbar} from "widgets/Siderbar/ui/Siderbar";
import {fireEvent, screen} from "@testing-library/react";
import React from "react";
import {componentRender} from "../../../shared/lib/tests/componentRender/componentRender";


describe('Siderbar', () => {
    test('with first param', () => {
        componentRender(<Siderbar/>);
        expect(screen.getByTestId('siderbar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Siderbar/>);

        const toggleBtn = screen.getByTestId('siderbar-toggle');
        const siderbar = screen.getByTestId('siderbar');

        expect(siderbar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(siderbar).toHaveClass('collapsed');
    });

});

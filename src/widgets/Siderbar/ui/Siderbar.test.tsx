import {Siderbar} from "widgets/Siderbar/ui/Siderbar";
import {fireEvent, screen} from "@testing-library/react";
import React from "react";
import {renderWithTranslation} from "../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";


describe('Siderbar', () => {
    test('with first param', () => {
        renderWithTranslation(<Siderbar/>);
        expect(screen.getByTestId('siderbar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Siderbar/>);

        const toggleBtn = screen.getByTestId('siderbar-toggle');
        const siderbar = screen.getByTestId('siderbar');

        expect(siderbar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(siderbar).toHaveClass('collapsed');
    });
});

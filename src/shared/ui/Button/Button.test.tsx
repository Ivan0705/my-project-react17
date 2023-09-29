import {Button, ThemeButton} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";
import * as React from "react";


describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST_CLEAR</Button>);
        expect(screen.getByText('TEST_CLEAR')).toHaveClass('clear');
        screen.debug();
    });
});

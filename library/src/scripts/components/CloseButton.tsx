/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import classNames from "classnames";
import { close } from "@library/components/icons/common";
import { t } from "@library/application";
import { ILegacyProps } from "@library/@types/legacy";
import Button from "@library/components/forms/Button";
import { ButtonTypes } from "@library/styles/buttonStyles";

interface IProps extends Partial<ILegacyProps> {
    className?: string;
    disabled?: boolean;
    onClick: any;
    baseClass?: ButtonTypes;
    title?: string;
}

/**
 * A standardized close button.
 */
export default class CloseButton extends React.PureComponent<IProps> {
    public static defaultProps = {
        legacyMode: false,
        baseClass: ButtonTypes.ICON,
    };

    /**
     * There are 2 rendering modes. 1 with w real icon, and one using text in place of an icon.
     */
    public render() {
        const closeLabel = this.props.title ? this.props.title : t("Close");
        const componentClasses = classNames("buttonClose", this.props.className);
        return (
            <Button
                disabled={this.props.disabled}
                type="button"
                className={componentClasses}
                title={closeLabel}
                onClick={this.props.onClick}
                baseClass={this.props.baseClass}
            >
                {close()}
            </Button>
        );
    }
}

import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import { RouteChildrenProps } from "react-router-dom";
import { findRouterInfo } from "../../../utils/untils";
export default function (props: RouteChildrenProps) {
    return (
        <div className="header">
            <NavBar
                mode="dark"
                leftContent=""
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{ findRouterInfo(props.location.pathname).title}</NavBar>
        </div>
    )
}
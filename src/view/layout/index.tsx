import React from 'react';
import { connect } from 'react-redux';
import { routerConfigItemTypes } from '../../index.d';
import { RouteChildrenProps } from 'react-router-dom';
import RouterItems from '../../components/RouterItems';
import TabBar from "./child/TabBar"
import Header from "./child/Header"
interface othersTypes {
    routes: routerConfigItemTypes[];
}
type props = othersTypes & RouteChildrenProps;
class LayoutView extends React.Component<props> {
    render() {
        return (
            <div className="layout">
                <Header {...this.props} />
                <div className="content">
                    <RouterItems {...this.props}></RouterItems>
                </div>
                <TabBar {...this.props}></TabBar>
            </div>
        );
    }
}

const MapStateToProps = ({ layout }: any) => {
    return {
    }
}

const MapDispatchToPropsFunction = (dispatch: any) => {
    return {
    };
};

export default connect(MapStateToProps, MapDispatchToPropsFunction)(LayoutView);

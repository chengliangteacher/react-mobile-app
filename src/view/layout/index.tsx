import React from 'react';
import { connect } from 'react-redux';
import { routerConfigItemTypes } from '../../index.d';
import { RouteChildrenProps } from 'react-router-dom';
import RouterItems from '../../components/RouterItems';
interface othersTypes {
    routes: routerConfigItemTypes[];
}
type props = othersTypes & RouteChildrenProps;
class LayoutView extends React.Component<props> {
    render() {
        return (
            <div>
                <RouterItems { ...this.props }></RouterItems>
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

import React, { useEffect, useState } from "react"
import { TabBar } from 'antd-mobile';
import { RouteChildrenProps } from "react-router-dom";
export default function (props: RouteChildrenProps) {
    const [selectedTab, setSelectedTab] = useState("1")
    useEffect(() => {
        switch(props.location.pathname) {
            case "/v/home": {
                setSelectedTab("1");
                break;
            }
            case "/v/message": {
                setSelectedTab("2");
                break;
            }
            case "/v/shopcar": {
                setSelectedTab("3");
                break;
            }
            default: {
                setSelectedTab("4");
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let handleOnPress = (val: string) => {
        switch (val) {
            case "1": {
                props.history.push("/v/home");
                break;
            }
            case "2": {
                props.history.push("/v/message");
                break;
            }
            case "3": {
                props.history.push("/v/shopcar");
                break;
            }
            default: {
                props.history.push("/v/mine");
                break;
            }
        }
        setSelectedTab(val);
    }
    return (
        <div className="footer-tab-bar">
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#27a771"
                barTintColor="white"
            >
                <TabBar.Item
                    selected={selectedTab === "1"}
                    title={selectedTab !== "1" ? "首页" : ""}
                    key="1"
                    icon={<i className="iconfont iconshouyeshouye tab-icon"></i>}
                    selectedIcon={<i className="iconfont iconshouye tab-icon-selected"></i>}
                    onPress={() => handleOnPress("1")}
                >
                </TabBar.Item>
                <TabBar.Item
                    selected={selectedTab === "2"}
                    icon={<i className="iconfont icondkw_xiaoxi tab-icon"></i>}
                    selectedIcon={<i className="iconfont iconxiaoxi tab-icon-selected"></i>}
                    title={selectedTab !== "2" ? "消息" : ""}
                    key="2"
                    badge={1}
                    onPress={() => handleOnPress("2")}
                >
                </TabBar.Item>
                <TabBar.Item
                    selected={selectedTab === "3"}
                    icon={<i className="iconfont icongouwuche tab-icon"></i>}
                    selectedIcon={<i className="iconfont icongouwuche1 tab-icon-selected"></i>}
                    title={selectedTab !== "3" ? "购物车" : ""}
                    key="3"
                    onPress={() => handleOnPress("3")}
                >
                </TabBar.Item>
                <TabBar.Item
                    selected={selectedTab === "4"}
                    icon={<i className="iconfont iconwode tab-icon"></i>}
                    selectedIcon={<i className="iconfont iconwodedangxuan1 tab-icon-selected"></i>}
                    title={selectedTab !== "4" ? "我的" : ""}
                    key="4"
                    dot
                    onPress={() => handleOnPress("4")}
                >
                </TabBar.Item>
            </TabBar>
        </div>
    )
}
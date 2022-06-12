import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import MenuComponent from "./MenuComponent";

const HeaderContentComponent = () => {
    return (
        <div className="header space-btm-md">
            <div className="headband">
                <div className="headband-none"></div>
                <div className="headband-logo">
                    <img src="./img/bethycardslogo.png" alt="logo" />
                </div>
                <div className="headband-checkout">
                    <Button
                        shape="round"
                        icon={<ShoppingCartOutlined />}
                    >
                    </Button>
                </div>
            </div>
            <MenuComponent />
        </div>
    );
}

export default HeaderContentComponent;

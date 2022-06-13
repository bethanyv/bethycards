import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const HeaderContentComponent = () => {
    return (
        <div className="header">
            <div className="headband">
                <div className="headband-none"></div>
                <div className="headband-logo">
                    <Link to="/" >
                        <img src="./img/bethycardslogo.png" alt="logo" />
                    </ Link>
                </div>
                <div className="headband-checkout">
                    <Link to="/checkout" >
                        <Button
                            shape="round"
                            icon={<ShoppingCartOutlined />}
                        >
                        </Button>
                    </ Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderContentComponent;

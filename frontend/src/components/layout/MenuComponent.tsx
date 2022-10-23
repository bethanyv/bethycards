import { Menu } from 'antd';

export const MenuComponent = () => {
    const items = [
        { label: 'All', key: 'item-1' }, // remember to pass the key prop
        { label: 'Birthday', key: 'item-2' }, // which is required
        { label: 'Seasonal', key: 'item-3' }
    ];

    return (
        <Menu
            mode="horizontal"
            items={items}
            className="menu"
        />
    );
}

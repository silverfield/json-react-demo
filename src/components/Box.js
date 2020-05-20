import { useState, useEffect } from 'react';

function Dataset({
    name,
    data,
}) {
    return <div className="dataset">
        <span className="name">{name}</span> <br/>
        <span className="key">Description: </span><span className="desc">{data['description']}</span> <br/>
        <span className="key">Data owner: </span><span className="data_owner">{data['data_owner']}</span> <br/>
    </div>    
}

function Folder({
    name,
    data,
}) {
    let childKeys = Object.keys(data['children']);
    const [collapsed, setCollapsed] = useState(false);

    return <div className="folder">
        <span className="name" onClick={() => setCollapsed(!collapsed)}>{name}</span> <br/>
        <div className={"folder-content" + (collapsed ? ' collapsed' : '')}>
            {childKeys.map(child => <Box key={child} name={child} data={data['children'][child]}/>)}
        </div>
    </div>
}


export default function Box({
    name,
    data
}) {
    return <div className={"box"}>
        {
            data['type'] === 'folder' ? 
            <Folder name={name} data={data}/> : 
            <Dataset name={name} data={data}/>
        }
    </div>
}
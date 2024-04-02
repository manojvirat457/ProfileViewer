export const UserCard = ({userData})=>{
    return (<div className="w-[98%]  bg-white h-[175px] overflow-hidden my-2 rounded-lg border-[1px] border-gray-300 p-4 flex">
        <div className="h-full w-1/2">
            <div className="h-[2rem] w-fill text-gray-400 text-left">User Image</div>
            <img className="w-fill border-[1px] border-gray-600 h-[calc(100%-2rem)]" src={userData.avatar_url}/>
        </div>
        <div className="h-full w-1/2">
            <div className="h-[2rem] w-fill text-gray-400 text-left">GitHub User Name</div>
            <div className="h-[2rem] w-fill text-black text-left">{userData.login}</div>
        </div>
    </div>);
}
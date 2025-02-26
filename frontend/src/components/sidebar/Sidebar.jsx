import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
            <Conversations />
            <LogoutButton/>
			<div className='divider px-3'></div>

		</div>
	);
};
export default Sidebar;

// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
//             <Conversations />
//             <LogoutButton/>
// 			<div className='divider px-3'></div>

// 		</div>
// 	);
// };
// export default Sidebar;
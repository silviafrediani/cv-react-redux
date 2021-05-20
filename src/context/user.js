import React from 'react';

const userId = {
	id: 1
}

const UserDataContext = React.createContext(userId);

const UserDataProvider = (props) => {

	const [user, setUser] = React.useState(userId);

	return (
		<UserDataContext.Provider value={[user, setUser]}>
			{props.children}
		</UserDataContext.Provider>
	);

}

export { UserDataContext, UserDataProvider };

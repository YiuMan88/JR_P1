import axios from 'axios'
const instance = axios.create({
	url: 'http://localhost:3001'
})
export const getListData = async () => {
	const result = axios.get('http://localhost:3001/api/list')
	return result
}

export const getSpecificStory = async story_id => {
	const result = axios.get(`http://localhost:3001/api/list/search/${story_id}`)
	return result
}

export const Logincheck = async loginDetail => {
	const result = axios.post('http://localhost:3001/api/login', null, {
		params: loginDetail,
		withCredentials: true
	})
	return result
}

export const registerCheck = async registerDetail => {
	const result = axios.post('http://localhost:3001/api/register', null, {
		params: registerDetail,
		withCredentials: true
	})
	return result
}

export const getUserStory = async user_id => {
	const result = axios.get(`http://localhost:3001/api/list/${user_id}`)
	return result
}

export const postStory = async storydata => {
	const result = axios.post('http://localhost:3001/api/list', null, {
		params: {
			...storydata
		}
	})
	return result
}

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
	return axios({
		method: 'post',
		url: 'http://localhost:3001/api/login',
		withCredentials: true,
		data: {
			loginDetail
		}
	})
}
export const registerCheck = async registerDetail => {
	return axios({
		method: 'post',
		url: 'http://localhost:3001/api/register',
		withCredentials: true,
		data: {
			registerDetail
		}
	})
}

export const getUserStory = async user_id => {
	const result = axios.get(`http://localhost:3001/api/list/${user_id}`)
	return result
}

export const postStory = async storydata => {
	return axios({
		method: 'post',
		url: 'http://localhost:3001/api/list',
		data: {
			storydata
		}
	})
}

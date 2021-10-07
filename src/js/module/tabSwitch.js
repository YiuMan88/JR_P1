export default class TabSwitch {
	constructor(el) {
		this.name = 'tab'
		this.tabGroup = el.getElementsByClassName('tabItem')
		this.storyGroup = el.getElementsByClassName('story')[0]
		this.section = this.storyGroup.querySelectorAll('section')
	}
	init() {
		this.bindEvent()
	}
	bindEvent() {
		for (let i = 0; i < this.tabGroup.length; i++) {
			this.tabGroup[i].addEventListener('click', this.tabClick.bind(this, i), false)
		}
	}
	tabClick(e, index) {
		this.storyBoardSwitch(e)
	}
	storyBoardSwitch(index) {
		for (let i = 0; i < this.section.length; i++) {
			this.section[i].className = ''
		}
		this.section[index].className = 'display'
	}
}

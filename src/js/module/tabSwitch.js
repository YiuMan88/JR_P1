export default class TabSwitch {
	constructor(el) {
		this.tabGroup = el.getElementsByClassName('content__tab__item')
		this.storyGroup = el.getElementsByClassName('content__pannel')[0]
		this.section = this.storyGroup.querySelectorAll('article')
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
		let className = 'content__pannel__section'
		for (let i = 0; i < this.section.length; i++) {
			this.section[i].className = className
		}
		this.section[index].className = `${className}--show`
	}
}

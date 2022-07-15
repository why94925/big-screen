export interface ChinaTotal {
	confirm: number;
	heal: number;
	showLocalConfirm: number;
	noInfectH5: number;
	confirmAdd: number;
	nowLocalWzz: number;
	showlocalinfeciton: number;
	localWzzAdd: number;
	deadAdd: number;
	mtime: string;
	highRiskAreaNum: number;
	localConfirm: number;
	mRiskTime: string;
	dead: number;
	localConfirmAdd: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
	noInfect: number;
	localConfirmH5: number;
	local_acc_confirm: number;
	mediumRiskAreaNum: number;
}

export interface ChinaAdd {
	localConfirm: number;
	localConfirmH5: number;
	dead: number;
	suspect: number;
	importedCase: number;
	nowSevere: number;
	noInfect: number;
	noInfectH5: number;
	confirm: number;
	heal: number;
	nowConfirm: number;
}

export interface ShowAddSwitch {
	localConfirm: boolean;
	all: boolean;
	confirm: boolean;
	suspect: boolean;
	dead: boolean;
	heal: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	localinfeciton: boolean;
	nowConfirm: boolean;
	importedCase: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	confirm: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	nowConfirm: number;
	dead: number;
	showHeal: boolean;
	heal: number;
	wzz: number;
	provinceLocalConfirm: number;
	showRate: boolean;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
}

export interface Total {
	showHeal: boolean;
	continueDayZeroConfirmAdd: number;
	mtime: string;
	confirm: number;
	wzz: number;
	highRiskAreaNum: number;
	continueDayZeroConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	dead: number;
	showRate: boolean;
	provinceLocalConfirm: number;
	adcode: string;
	nowConfirm: number;
	heal: number;
	mediumRiskAreaNum: number;
}

export interface Today {
	local_confirm_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
}

export interface Total {
	adcode: string;
	nowConfirm: number;
	dead: number;
	showHeal: boolean;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	confirm: number;
	wzz: number;
	provinceLocalConfirm: number;
	showRate: boolean;
	heal: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Today {
	isUpdated: boolean;
	tip: string;
	wzz_add: string;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
}

export interface Children {
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
	today: Today;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface LocalCityNCOVDataList {
	province: string;
	city: string;
	mtime: string;
	local_confirm_add: number;
	isSpecialCity: boolean;
	adcode: string;
	date: string;
	isUpdated: boolean;
	local_wzz_add: string;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}
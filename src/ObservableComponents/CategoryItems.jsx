import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class CategoryItems extends Component{
	let items = store.categoryItems.get(store.selectedCateegory) || [];
	let itemsHtml = store.UP_CONFIGs.
}

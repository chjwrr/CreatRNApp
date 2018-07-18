/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Color from '../../constance/staticColor';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Immutable from 'immutable';

class home extends Component {

    static navigationOptions = {
        headerTitle: <Text>主页</Text>,
        headerStyle: {elevation: 0, shadowOpacity: 0} ,// 导航条样式
        headerRight: (
            <View>
                <Text>home1</Text>
            </View>
        )
    };

    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }


    render() {
        return <View style={styles.container}>
            <Text>{this.props.abc}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR
    },
});

function mapStateToProps(state) {
    return {
        abc: state.getIn(['homeRedux','abc'])
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(home)
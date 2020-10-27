
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../util/colors';
import commonStyles from '../../util/commonStyles';

const Styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: '10rem'
    },
    list: { 
        ...commonStyles.shadow,
        // backgroundColor: Color, 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 5, 
        overflow: 'hidden'
    },
    currentView: { 
        paddingHorizontal: '30rem',
        paddingVertical: '20vrem'
    },
    areaTitle: {
        ...commonStyles.fontLarge,
        fontWeight: 'bold'
    },
    dateText: {
        ...commonStyles.fontXSmall,
        color: Colors.grey
    },
    currentTempView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '20rem',
        paddingVertical: '15vrem'
    },
    currentTempText: {
        ...commonStyles.fontXLarge
    },
    currentIcon: {
        width: '100rem',
        height: '100vrem'
    },
    detailsOuterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detailsView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailsText: {
        ...commonStyles.fontSmall,
        fontWeight: 'bold',
        color: Colors.grey,
        marginRight: '10rem'
    },
    detailsIcons: {
        width: '18rem',
        height: '18vrem',
        resizeMode: 'contain',
        marginRight: '5rem'
    },
    selectedText: {
        color: Colors.blue
    }

})

export default Styles
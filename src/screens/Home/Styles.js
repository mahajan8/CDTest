
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../util/colors';
import commonStyles from '../../util/commonStyles';

const Styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: '10rem'
    },
    list: { 
        // backgroundColor: Color, 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 5, 
        overflow: 'hidden'
    },
    currentView: { 
        paddingHorizontal: '30rem',
        paddingVertical: '40vrem'
    },
    areaTitle: {
        fontWeight: 'bold'
    },
    dateText: {
        color: Colors.grey
    },
    currentTempView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '20rem',
        paddingVertical: '15vrem'
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
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '30rem',
        paddingVertical: '10vrem',
        marginTop: '20rem',
        backgroundColor: Colors.blue,
        borderRadius: 25
    },
    errorButtonText: {
        color: Colors.white
    }

})

export default Styles
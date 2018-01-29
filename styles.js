// AppBar (Header) styles
export const bgStatusBar = 'rgba(0, 0, 0, 0.20)';
export const bgHeader = '#2196F3';
export const headerColor = '#fff';

// Drawer Styles
export const bgDrawer = '#2196F3';
export const bgDrawerHeader = '#0D47A1';
export const drawerLogoColor = bgHeader;
export const drawerItemColor = headerColor;
export const drawerActiveItemColor = '#0D47A1';
export const bgDrawerActiveItem = headerColor;

export default ContainerStyles = ({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 15
    },
    h1: {
      fontSize: 22,
      marginBottom: 20
    },
    p: {
      fontSize: 16,
      lineHeight: 24
    },
    figure: {
      marginBottom: 20,
    },
    img: {
      width: 300,
      height: 300,
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: '#000'
    },
    credits: {
      flexDirection: 'row'
    },
    labelCredits: {
      fontSize: 18
    },
    linkCredits: {
      fontStyle: 'italic',
      color: '#2962FF'
    }
  });
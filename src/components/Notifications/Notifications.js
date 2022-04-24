// import React, {useState} from 'react'
// import { Icon, Notification } from "atomize";

// const Notifications = ({kind, message}) => {
//   const [showNotification, setShowNotification] = useState(true);
//   setTimeout(() => {
//     setShowNotification(false);
//   }, 5000);
//   return (
//     <Notification
//           m={{xs: "1rem 0 0 0", md: "1rem auto"}}
//           bg={kind ? "success700" : "warning700"}
//           isOpen={showNotification}
//           prefix={
//             <Icon
//               name={kind ? "InfoSolid" : "CloseSolid"}
//               color="white"
//               size="18px"
//               m={{ r: "0.5rem" }}
//             />
//           }
//           textAlign="center"
//           w="auto"
//           p={{l:"2em", r:"2rem", b:"1em", t:"1em"}}
//           textSize={{xs:"0.8rem", md:"1rem"}}
//         >
//         {message}
//     </Notification>
//   )
// }
// export default Notifications
import React from 'react'
import { Button, Notification } from "atomize";
class MyNotifation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false
    };
  }
  render() {
    const { showNotification } = this.state;
    return (
      <>
        <Button
          bg="gray700"
          hoverBg="gray600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ showNotification: true })}
        >
          Show auto close notification
        </Button>
        <Notification
          isOpen={showNotification}
          onClose={() => this.setState({ showNotification: false })}
        >
          This notification is self closable
        </Notification>
      </>
    );
  }
}
export default MyNotifation;
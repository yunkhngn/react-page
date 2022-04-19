import React, {useState} from 'react'
import { Icon, Notification } from "atomize";

const Notifications = ({kind, message}) => {
  const [showNotification, setShowNotification] = useState(true);
  setTimeout(() => {
    setShowNotification(false);
  }, 5000);
  return (
    <Notification
          m={{xs: "1rem 0 0 0", md: "1rem auto"}}
          bg={kind ? "success700" : "warning700"}
          isOpen={showNotification}
          prefix={
            <Icon
              name={kind ? "InfoSolid" : "CloseSolid"}
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
          textAlign="center"
          w="auto"
          p={{l:"2em", r:"2rem", b:"1em", t:"1em"}}
          textSize={{xs:"0.8rem", md:"1rem"}}
        >
        {message}
    </Notification>
  )
}
export default Notifications
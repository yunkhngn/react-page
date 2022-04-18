import React, {useState} from 'react'
import { Icon, Notification } from "atomize";

const Notification = ({isNoti, message}) => {
  const [isOn, setIsOn] = useState(isNoti);

  return (
    <Notification
          bg="success700"
          isOpen={isOn}
          onClose={() => setIsOn(false)}
          prefix={
            <Icon
              name="Success"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
        {message}
    </Notification>
  )
}

export default Notification
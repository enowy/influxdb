// Libraries
import React, {FunctionComponent} from 'react'
import {withRouter, WithRouterProps} from 'react-router'
import queryString from 'query-string'

// Components
import AllAccessTokenOverlay from 'src/authorizations/components/AllAccessTokenOverlay'
import NewEndpointOverlay from 'src/alerting/components/endpoints/NewEndpointOverlay'
import DeleteDataOverlay from 'src/dataExplorer/components/DeleteDataOverlay'

const OverlayRouter: FunctionComponent<WithRouterProps> = ({location, router}) => {
  const {overlay} = queryString.parse(location.search)

  
  const handleDismissOverlay = (): void => {
    const newPath = `${location.pathname}`
    router.push(newPath)
  }

  let activeOverlay = <></>

  switch (overlay) {
    case 'all-access-token':
      activeOverlay = <AllAccessTokenOverlay onDismiss={handleDismissOverlay} />
      break
    case 'new-endpoint':
      activeOverlay = <NewEndpointOverlay onDismiss={handleDismissOverlay} />
      break
    case 'delete-data':
      activeOverlay = <DeleteDataOverlay onDismiss={handleDismissOverlay} />
      break
    default:
      break
  }

  return activeOverlay
}



export default withRouter(OverlayRouter)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import LogsBox from 'material-ui/svg-icons/action/pageview'
import {white} from 'material-ui/styles/colors'

class LogsButton extends Component {

    render() {
        const {styles} = this.props
        const style = {
            buttonsContainer: {
              marginLeft: 20,
            },
            link: {
                textDecoration: 'none',
                color: '#FFF'
            }
        }
        return(
            <a>
                <IconMenu color={white} style={{...styles, ...style.buttonsContainer}}
                    iconButtonElement={
                    <IconButton><LogsBox color={white}/></IconButton>
                    }
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    <Link to='/logs' style={style.link}><MenuItem key={1} primaryText="View Logs"/></Link>
                </IconMenu>
            </a>
        )
    }
}

LogsButton.propTypes = {
    styles: PropTypes.object,
}


export default LogsButton
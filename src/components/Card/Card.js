import React from 'react';
/* Import  NPM */
import PropTypes from 'prop-types'; 
import {Draggable} from 'react-beautiful-dnd';
/* Import  JS */ 

/* Import  Styles */ 
import styles from './Card.scss';

class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      id: PropTypes.string,
      index: PropTypes.number,
    }

    static defaultProps = {
      title: 'Default Card Title',
    }

    render () {
      const {title, id, index} = this.props;

      return (
        <Draggable draggableId={id} index={index}>
          {(provided) => (
            <article
              className={styles.component}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {title}
            </article>
          )}
        </Draggable>
      );
    }
}

export default Card;
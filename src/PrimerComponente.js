import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
/**
 * Primer componente
 * Basados en clase
 * Basados en funciones - Mejor forma (functional components)
 */
/** Uso de props */
const PrimerComponente = ({saludo, subtitulo}) => {

    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </Fragment>
    );
}

/**
 * PropTypes
 */
PrimerComponente.propTypes = {
    saludo : PropTypes.string.isRequired
}

/**
 * Default PropType
 */
PrimerComponente.defaultProps = {
    subtitulo : 'Soy un subtitulo'
}

export default PrimerComponente;
import React from 'react';

const Title=()=> {
    console.log('rendering title...');

    return <h1>React.memo, useCallback and useMemo</h1>;
}

export default React.memo(Title);
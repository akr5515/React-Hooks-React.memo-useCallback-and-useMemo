import React from 'react';

const ShowCount=({ count, title })=> {
    console.log(`rendering ${title}....`);

    return (
        <h2>
            {title} is {count}
        </h2>
    );
}

export default React.memo(ShowCount);
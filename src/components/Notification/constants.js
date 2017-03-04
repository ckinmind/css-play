var CONSTANTS = {

    // Positions
    positions: {
        tl: 'tl',   /* top-left */
        tr: 'tr',   /* top-right */
        tc: 'tc',   /* top-center */
        bl: 'bl',   /* bottom-left*/
        br: 'br',   /* bottom-right*/
        bc: 'bc'    /* bottom-center*/
    },

    // Levels
    levels: {
        success: 'success',
        error: 'error',
        warning: 'warning',
        info: 'info'
    },

    // Notification defaults
    notification: {
        title: null,         /* 标题 */
        message: null,       /* 文字消息 */
        level: null,         /* 消息类型 */
        position: 'tr',      /* 通知出现位置 */
        autoDismiss: 5,      /* 消失时间 */
        dismissible: true,   /* 是否消失*/
        action: null         /* 额外操作*/
    }
};


module.exports = CONSTANTS;
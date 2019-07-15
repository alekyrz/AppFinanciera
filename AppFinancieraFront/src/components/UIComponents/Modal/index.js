import React, {useState, useEffect} from 'react'

import styles from './index.module.css';



function Modal({isOpen = false, title = '', children, buttons = null, onClose}) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen]);

  return (
    open ? (
      <React.Fragment>
        <div className={`modal fade show ${styles.modalMod}`} tabindex="-1" role="dialog" aria-modal="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel">
                  {title}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" onClick={() => {
                    setOpen(false);
                    onClose();
                  }}>×</span>
                </button>
              </div>
              <div className="modal-body">
                {children}
              </div>
              {buttons && <div className="modal-footer">{buttons}</div>}
            </div>
          </div>
        </div>

        <div className="modal-backdrop fade show"></div>
      </React.Fragment>
    ) : null
  )
}

export default Modal;
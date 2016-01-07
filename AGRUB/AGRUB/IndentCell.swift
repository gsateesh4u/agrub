//
//  IndentCell.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 30/12/15.
//  Copyright © 2015 agrub. All rights reserved.
//

import UIKit

class IndentCell: UITableViewCell {

    @IBOutlet weak var tblItems: UITableView!
    @IBOutlet weak var lblTitle: UILabel!
    @IBOutlet weak var lblStatus: UILabel!
    @IBOutlet weak var lblDate: UILabel!
    @IBOutlet weak var vwShadow: UIView!
    override func awakeFromNib() {
        super.awakeFromNib()
        self.lblTitle.font = UIFont(name: "Roboto-Light", size: 14)
        self.lblStatus.font = UIFont(name: "Roboto-Light", size: 13)
        self.lblDate.font = UIFont(name: "Roboto-Light", size: 13)
        
        //Add drop shadow layer
        vwShadow.layer.masksToBounds = false
        vwShadow.layer.shadowOpacity = 0.5
        vwShadow.layer.shadowOffset = CGSize(width: 0.5, height: 1.0)
        vwShadow.layer.shadowColor = UIColor.grayColor().CGColor
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }

}

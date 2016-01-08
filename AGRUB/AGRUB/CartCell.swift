//
//  CartCell.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 30/12/15.
//  Copyright © 2015 agrub. All rights reserved.
//

import UIKit

class CartCell: UITableViewCell {

    @IBOutlet weak var vwContainer: UIView!
    override func awakeFromNib() {
        super.awakeFromNib()
        
        //Add drop shadow layer
        if (vwContainer != nil){
            vwContainer.layer.masksToBounds = false
            vwContainer.layer.shadowOpacity = 0.5
            vwContainer.layer.shadowOffset = CGSize(width: 0.5, height: 1.0)
            vwContainer.layer.shadowColor = UIColor.grayColor().CGColor
        }
        
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}

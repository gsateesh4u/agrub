//
//  ItemCell.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 05/01/16.
//  Copyright © 2016 agrub. All rights reserved.
//

import UIKit

class ItemCell: UITableViewCell {

    @IBOutlet weak var vwScrollContainer: UIScrollView!
    @IBOutlet weak var vwTerms: UIView!
    
    @IBOutlet weak var lblItemCategName: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

    func viewWillLayoutSubviews(){
        vwScrollContainer.contentSize = CGSizeMake(1400, 128)
    }

    
}

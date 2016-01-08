//
//  InvoiceViewController.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 29/12/15.
//  Copyright © 2015 agrub. All rights reserved.
//

import UIKit

class InvoiceViewController: UIViewController {

    @IBOutlet weak var lblHeader: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        lblHeader.font = UIFont(name: "Roboto-Regular", size: 20)
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}

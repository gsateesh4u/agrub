//
//  CartViewController.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 30/12/15.
//  Copyright © 2015 agrub. All rights reserved.
//

import UIKit

class CartViewController: UIViewController,UITableViewDataSource,UITableViewDelegate {

    @IBOutlet weak var tblCarts: UITableView!
    @IBAction func back(sender: AnyObject) {
        [self .dismissViewControllerAnimated(true, completion: nil)]
    }
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int{
        return 5
    }
    
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell{
        let cell = tableView.dequeueReusableCellWithIdentifier("CartCell", forIndexPath: indexPath) as! CartCell
        cell.backgroundColor=nil
        cell.selectionStyle = UITableViewCellSelectionStyle.None
        return cell
    }
    
    /*
    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}

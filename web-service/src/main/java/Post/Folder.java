/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Post;

import Notification.Notification;
import Registration.CourseOffering;
import core.Permission;

/**
 * a folder used to hold files just for view purpose only
 * can have a folder hierarchy
 */
public class Folder extends AbstractPost {

	CourseOffering cource;
	Folder parent;

	@Override
	protected Notification generateNotification(String title, String message) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public Permission hasPermission() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public Object[] search(String query) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

}

package com.cg.anurag.conn;
import java.sql.*;
public class DBconnection 
{
 public static Connection establishConnection() throws Exception
 {
	 Class.forName("oracle.jdbc.driver.OracleDriver");
	 return DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","manish","manish");
 }
}

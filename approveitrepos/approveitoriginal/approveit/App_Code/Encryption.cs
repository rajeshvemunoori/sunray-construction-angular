﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Security;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Security.Cryptography;
using System.Text;

/// <summary>
/// Summary description for Encryption
/// </summary>
public class Encryption
{
	public Encryption()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    public string GenerateAPassKey(string phrase)
    {
        // Pass Phrase can be any string
        string passPhrase = phrase;
        // Salt Value can be any string(for simplicity use the same value as used for the pass phrase)
        string saltValue = phrase;
        // Hash Algorithm can be "SHA1 or MD5"
        string hashAlgorithm = "SHA1";
        // Password Iterations can be any number
        int passwordIterations = 2;
        // Key Size can be 128,192 or 256
        int keySize = 256;
        // Convert Salt passphrase string to a Byte Array
        byte[] saltValueBytes = Encoding.ASCII.GetBytes(saltValue);
        // Using System.Security.Cryptography.PasswordDeriveBytes to create the Key
        PasswordDeriveBytes pdb = new PasswordDeriveBytes(passPhrase, saltValueBytes, hashAlgorithm, passwordIterations);
        //When creating a Key Byte array from the base64 string the Key must have 32 dimensions.
        byte[] Key = pdb.GetBytes(keySize / 11);
        String KeyString = Convert.ToBase64String(Key);

        return KeyString;
    }

    public string Encrypt(string plainStr, string KeyString)
    {
        RijndaelManaged aesEncryption = new RijndaelManaged();
        aesEncryption.KeySize = 256;
        aesEncryption.BlockSize = 128;
        aesEncryption.Mode = CipherMode.ECB;
        aesEncryption.Padding = PaddingMode.ISO10126;
        byte[] KeyInBytes = Encoding.UTF8.GetBytes(KeyString);
        aesEncryption.Key = KeyInBytes;
        byte[] plainText = ASCIIEncoding.UTF8.GetBytes(plainStr);
        ICryptoTransform crypto = aesEncryption.CreateEncryptor();
        byte[] cipherText = crypto.TransformFinalBlock(plainText, 0, plainText.Length);
        return Convert.ToBase64String(cipherText);
    }

    public string Decrypt(string encryptedText, string KeyString)
    {
        RijndaelManaged aesEncryption = new RijndaelManaged();
        aesEncryption.KeySize = 256;
        aesEncryption.BlockSize = 128;
        aesEncryption.Mode = CipherMode.ECB;
        aesEncryption.Padding = PaddingMode.ISO10126;
        byte[] KeyInBytes = Encoding.UTF8.GetBytes(KeyString);
        aesEncryption.Key = KeyInBytes;
        ICryptoTransform decrypto = aesEncryption.CreateDecryptor();
        byte[] encryptedBytes = Convert.FromBase64CharArray(encryptedText.ToCharArray(), 0, encryptedText.Length);
        return ASCIIEncoding.UTF8.GetString(decrypto.TransformFinalBlock(encryptedBytes, 0, encryptedBytes.Length));
    }
}
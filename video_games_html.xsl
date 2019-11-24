<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
    <xsl:output method="xml" doctype-system="HTTP://WWW.W3.ORG/TR/XHTML1/DTD/XHTML1-STRICT.DTD" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <!-- xmlns="http://www.w3.org/1999/xhtml" xml:lang="pl" lang="pl" -->
            <xsl:attribute name="xd" select="'http://www.w3.org/1999/xhtml'"/>
            <xsl:apply-templates></xsl:apply-templates>
        </html>
    </xsl:template>

</xsl:stylesheet>
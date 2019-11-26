<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
    <xsl:output method="xml" doctype-system="http://www.w3.org/tr/xhtml1/dtd/xhtml1-strict.dtd" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <xsl:element name="html"  namespace="http://www.w3.org/1999/xhtml">
            <xsl:element name="head">

            </xsl:element>
            <xsl:element name="body">
                <xsl:apply-templates></xsl:apply-templates>
            </xsl:element>
        </xsl:element>
    </xsl:template>

</xsl:stylesheet>